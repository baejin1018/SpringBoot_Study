package org.dgsw;

// 싱글톤 패턴
public class Test {
    private static  Test test   ;

    public static Test getInstance() {
        if(test == null)
            test = new Test();
        return Test.test;
    }
}
