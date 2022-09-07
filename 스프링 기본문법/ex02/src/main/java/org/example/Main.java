package org.example;

import components.B;
import myclass.C;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext acac =
            new AnnotationConfigApplicationContext(AppCtx.class);

        A a = acac.getBean(A.class);
        a.doA();

        B b = acac.getBean(B.class);
        b.doB();

        C c = acac.getBean(C.class);
        c.doC();
        acac.close();
    }
}