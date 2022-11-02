package com.dip.dip.controller;

import com.dip.dip.entity.Member;
import com.dip.dip.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("members")
public class MemberController {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("login")
    public String login(){
        return "members/login";
    }

    @GetMapping("signup")
    public String signup(){
        return "members/signup";
    }

    @PostMapping("signup")
    public String psignup(Member member){
        System.out.println(member);
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        memberRepository.save(member);
        System.out.println("작동");
        return "redirect:/members/login";
    }
}

