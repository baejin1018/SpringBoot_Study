package com.dgsw.studyjpa.repository;

import com.dgsw.studyjpa.entity.AA;
import com.dgsw.studyjpa.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

//select, insert, delete, update 가 자동으로 만들어진다
public interface PersonRepository extends JpaRepository<Person,Long> {
    List<Person> findByLastName(@Param("name") String name);
}
