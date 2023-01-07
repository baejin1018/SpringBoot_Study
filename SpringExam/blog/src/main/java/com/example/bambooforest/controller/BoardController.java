package com.example.bambooforest.controller;

import com.example.bambooforest.dto.BoardResponse;
import com.example.bambooforest.dto.UpdateRequest;
import com.example.bambooforest.dto.WriteRequest;
import com.example.bambooforest.entity.Board;
import com.example.bambooforest.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RequestMapping("board")
@RestController
public class BoardController {

    @Autowired
    BoardRepository boardRepository;

    @GetMapping("list")
    public List<Board> list(){
        List<Board> list = boardRepository.findAll();
        return list;
    }

    @PostMapping("write")
    public void write(@RequestBody WriteRequest data){
        Board bd = new Board(data.getWriter(), data.getTitle(), data.getContent());
        boardRepository.save(bd);
    }

    @PostMapping("update/{id}")
    public void update(@RequestBody UpdateRequest data,@PathVariable("id") Long id){
        System.out.println("id="+ id);
        // 디비에서 id를 이용해서 게시글을 찾는다
        Board bd = boardRepository.findById(id)
                .orElseThrow(() -> {throw new RuntimeException("게시글을 못 찾았습니다");});
        // title, content, writer 세가지만 update 메서드를 이용하여 변경한다
        bd.update(data.getTitle(), data.getContent(), data.getWriter());
        // 디비에 update를 한다
        boardRepository.save(bd);
    }

    @GetMapping("view/{id}")
    public BoardResponse view(@PathVariable("id") Long id){
        //pathVariable을 이용해 id를 가져오고 DB에서 id를 이용해 게시물을 찾는다
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> {throw new RuntimeException("게시글을 못 찾았습니다");});

        //찾은 것 중에 필요한 데이터만 response로 보내기 위해 객체를 생성
        return new BoardResponse(
                board.getId(),
                board.getWriter(),
                board.getTitle(),
                board.getContent(),
                //2022-10-28 13:29 형식으로 포멧
                DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm").format(board.getWdate())
        );
    }
}
