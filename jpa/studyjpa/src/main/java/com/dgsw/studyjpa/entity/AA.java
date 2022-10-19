package com.dgsw.studyjpa.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity //테이블만들기
@Getter // setter 함수
@Setter // getter 함수
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 모든파라미터가 있는 생성자
@Builder //builder 객체 생성
public class AA {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id",nullable = false)
    private Long id;
    private String aa;
    private String bb;

    private LocalDateTime cdate;
    private LocalDateTime mdate;

    private int count;
}
