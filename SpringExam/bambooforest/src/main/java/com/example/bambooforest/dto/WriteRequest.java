package com.example.bambooforest.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class WriteRequest {
    private String title;
    private String content;
    private String writer;

}
