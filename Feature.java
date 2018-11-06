package com.javasampleapproach.restful.model;

public class Feature {
	
	private int fid;
	private String featureName;
	private String application;
	private String description;
	
	public Feature() {
		
	}
	public Feature(String fname, String app, String desc){
		this.featureName = fname;
		this.application = app;
		this.description = desc;
	}
	
	public Feature(int fid, String featurename, String application, String description){
		this.fid = fid;
		this.featureName = featurename;
		this.application = application;
		this.description = description;
	}
	
	
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getFeatureName() {
		return featureName;
	}
	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}
	public String getApplication() {
		return application;
	}
	public void setApplication(String application) {
		this.application = application;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
}
