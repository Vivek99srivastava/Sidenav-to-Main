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
import com.javasampleapproach.restful.model.Feature;

@CrossOrigin(origins = { "http://localhost:7900" })
@RestController
@RequestMapping(value="/api")
public class FeatureController {
	
	private Map<Integer, Feature> features = new HashMap<Integer, Feature>(){

		{
	        put(1, new Feature(1, "FT-45", "Cerebros", "production issue"));
	        put(2, new Feature(2, "FT-7", "Kalturas", "deployment"));
	        put(3, new Feature(3, "FT-76", "Warp", "stage"));
	    }
	};

	@CrossOrigin(origins = "http://localhost:7800")
	@RequestMapping(value = "/feature/", method = RequestMethod.GET, produces = "application/json")
	public List<Feature> getAll(){
		List<Feature> results = features.entrySet().stream()
									.map(entry ->entry.getValue())
									.collect(Collectors.toList());
		return results;
	}
	
	
	@RequestMapping(value = "/feature/{id}", method = RequestMethod.GET, produces = "application/json")
	public Feature getFeature(@PathVariable int id){
		return features.get(id);
	}
	
	
	@RequestMapping(value = "/feature", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Feature postFeature(@RequestBody Feature feature){
		int fid = features.size()+ 1;
		feature.setFid(fid);
		features.put(fid, feature);
		return feature;
	}
	
	@RequestMapping(value = "/feature/{fid}", method = RequestMethod.PUT, consumes = "application/json", produces = "application/json")
	public void putFeature(@RequestBody  Feature feature, @PathVariable int fid){
		features.replace(fid, feature);
	}
	
	@RequestMapping(value = "/feature/{fid}", method = RequestMethod.DELETE, consumes = "application/json", produces = "application/json")
	public void deleteFeature(@PathVariable int fid){
		features.remove(fid);
	}
	
	
}
