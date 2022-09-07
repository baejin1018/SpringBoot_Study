package com.example.demo.comtroller;

import com.example.demo.components.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.sql.DataSource;
import java.util.Arrays;
import java.util.List;

@Controller
public class AController {
    @Autowired
    A a;

    @GetMapping("aa")
    public String aa(Model model){
        a.doA();
        model.addAttribute("aa","a문자열");
        model.addAttribute("mya","2");

        List<String> alist = Arrays.asList("홍길동","배길동","김길동");
        model.addAttribute("alist",alist);

        model.addAttribute("mytrue",true);
        model.addAttribute("myfalse",false);
        return  "aa";
    }
}
