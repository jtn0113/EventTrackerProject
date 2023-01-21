package com.skilldistillery.locations.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.locations.entities.Location;
import com.skilldistillery.locations.services.LocationService;

@RestController
@RequestMapping("api")
public class LocationController {

	@Autowired
	private LocationService locationService;
	
	@GetMapping("locations")
	public List<Location> listAllLocations() {
		return locationService.allLocations();
	}
}
