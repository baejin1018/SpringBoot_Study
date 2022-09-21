package com.dgsw.mybatis.dto;

import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotEmpty;

@Data
public class Test {
    @NotEmpty
    private String aa;
    @Length(min=5)
    @NotEmpty
    private String bb;
}
