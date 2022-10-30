package com.example.bambooforest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UpdateRequest {
    private String title;
    private String content;
    private String writer;
}
