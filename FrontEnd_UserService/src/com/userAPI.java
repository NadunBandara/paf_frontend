package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import com.user;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/userAPI")
public class userAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
      
	user userObj = new user(); 
   
    public userAPI() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException 
			{ 
			 String output = userObj.insertuser(request.getParameter("uid"), 
			 request.getParameter("uname"), 
			request.getParameter("uemail"), 
			request.getParameter("uphone")); 
			 request.getParameter("upw"); 
			response.getWriter().write(output); 
			}



	protected void doPut(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException 
			{ 
			 Map paras = getParasMap(request); 
			 String output = userObj.updateuser(paras.get("hididSave").toString(), 
			 paras.get("uid").toString(), 
			 paras.get("uname").toString(), 
			paras.get("uemail").toString(), 
			paras.get("uphone").toString()); 
			 paras.get("upw").toString();
			response.getWriter().write(output); 
			} 
	
		

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException 
			{ 
			 Map paras = getParasMap(request); 
			 String output = userObj.deleteuser(paras.get("uid").toString()); 
			response.getWriter().write(output); 
			}

	

	private static Map getParasMap(HttpServletRequest request)
    {
     Map<String, String> map = new HashMap<String, String>();
    try {
     Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
     String queryString = scanner.hasNext() ?
     scanner.useDelimiter("\\A").next() : "";
     scanner.close();
     String[] params = queryString.split("&");
     for (String param : params)
     { 
    	 String[] p = param.split("=");
    	 map.put(p[0], p[1]);
     }
      }catch (Exception e)
    	 {
    	 }
    	return map;  
    }
}
