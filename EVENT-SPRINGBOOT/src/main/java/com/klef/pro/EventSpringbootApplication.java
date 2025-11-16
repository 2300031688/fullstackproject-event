package com.klef.pro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class EventSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventSpringbootApplication.class, args);
		System.out.println("running");
	}

}
