package com.javasampleapproach.restful;
//
//import java.io.IOException;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


 @Component
 public class SimpleCORSFilter implements Filter {

/**
 * The Logger for this class.
 */
private final Logger logger = LoggerFactory.getLogger(this.getClass());


//@Override
public void doFilter(ServletRequest req, ServletResponse resp,FilterChain chain) throws IOException, ServletException {
    logger.info("> doFilter");

    HttpServletResponse response = (HttpServletResponse) resp;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
    response.setHeader("Access-Control-Max-Age", "3600");
    response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
    //response.setHeader("Access-Control-Allow-Credentials", "true");
    chain.doFilter(req, resp);

    logger.info("< doFilter");
}


public void destroy() {
	// TODO Auto-generated method stub
	
}


public void init(FilterConfig arg0) throws ServletException {
	// TODO Auto-generated method stub
	
}
}


