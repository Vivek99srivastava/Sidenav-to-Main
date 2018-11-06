package com.javasampleapproach.restful.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.restful.model.Customer;

@CrossOrigin(origins = { "http://localhost:7800" })
@RestController
@RequestMapping(value="/api")
public class WebController {
	
	private Map<Integer, Customer> customers = new HashMap<Integer, Customer>(){

		{
	        put(1, new Customer(1, "Mary", "Taylor", 24));
	        put(2, new Customer(2, "Peter", "Smith", 18));
	        put(3, new Customer(3, "Lauren", "Taylor", 31));
	    }
	};
	
	@CrossOrigin(origins = "http://localhost:7800")
	@RequestMapping(value = "/customer/", method = RequestMethod.GET, produces = "application/json")
	public List<Customer> getAll(){
		List<Customer> results = customers.entrySet().stream()
									.map(entry ->entry.getValue())
									.collect(Collectors.toList());
		return results;
	}
	

	@RequestMapping(value = "/customer/{id}", method = RequestMethod.GET, produces = "application/json")
	public Customer getCustomer(@PathVariable int id){
		return customers.get(id);
	}
	
	
	@RequestMapping(value = "/customer", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Customer postCustomer(@RequestBody Customer customer){
		int id = customers.size() + 1;
		customer.setId(id);
		customers.put(id, customer);
		return customer;
	}
	
	@RequestMapping(value = "/customer/{id}", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
	public void putCustomer(@RequestBody Customer customer, @PathVariable int id){
		customers.replace(id, customer);
	}
	
	
	@RequestMapping(value = "/customer/{id}", method = RequestMethod.DELETE, consumes = "application/json", produces = "application/json")
	public void deleteCustomer(@PathVariable int id){
		customers.remove(id);
	}
}