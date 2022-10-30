package com.example.bambooforest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BoardResponse {

    private Long id;
    private String writer;
    private String title;
    private String content;
    private String wdate;
}