package com.dgsw.mybatis.controller;

import com.dgsw.mybatis.dto.Test;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("board")
public class BoardController {

    @Autowired
    SqlSessionTemplate sqlSessionTemplate;

    @PostMapping("update")
    public String update(Test test){
        sqlSessionTemplate.update("test.updatetest",test);
        return "redirect:/board/findall";
    }

    @GetMapping("update")
    public String update(int idx,Test test,Model model){
        System.out.println("idx = "+idx);
        sqlSessionTemplate.selectOne("test.findbyindex",idx);
        System.out.println(test);
        model.addAttribute("test",test);
        return "insert";
    }

    //select 해서 테이블 내용 뿌리기
    @GetMapping("findall")
    public String findall(Model model){
        System.out.println("findall");

        List<Test> testlist = sqlSessionTemplate.selectList("test.findall");

        model.addAttribute("a","10");
        model.addAttribute("testlist",testlist);
        return "findall";
    }

    //insert해서 테이블에 행 삽입
    @GetMapping("insert")
    public String insert(Test test){
        return "insert";
    }

    @PostMapping("insert")
    public String prinsert(@Valid Test test, BindingResult bindingResult,Model model){
        if(bindingResult.hasErrors()){
            model.addAttribute("error",true);
            return "insert";
        }
        System.out.println(test);
        sqlSessionTemplate.insert("test.inserttest",test);
        return "redirect:/board/findall";
    }


   @PostMapping("delete")
    public String delete(int[] idx){
       List<Integer> list = new ArrayList<>();
        if(idx != null){
            for (int i = 0; i<idx.length; i++) {
                System.out.println(idx[i]);
                list.add(idx[i]);
            }
            System.out.println("출력끝");
        }

        sqlSessionTemplate.delete("test.deletetest",list);
       System.out.println("delete");
        return "redirect:/board/findall";
   }

}
