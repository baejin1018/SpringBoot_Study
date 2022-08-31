package org.dgsw;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext acac
                = new AnnotationConfigApplicationContext(AppCtx.class);
        A a1 = acac.getBean(A.class);
        a1.doA();
        acac.close();
    }
}