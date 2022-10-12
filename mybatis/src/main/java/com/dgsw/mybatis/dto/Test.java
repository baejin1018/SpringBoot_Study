package com.dgsw.mybatis.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

@Data
public class Test {

    private Integer idx;

    @Length(min=5,message = "최소값이 5이상이어야 합니다")
    @NotEmpty
    private String aa;
    @Length(min=5)
    @NotEmpty
    private String bb;
}
