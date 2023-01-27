package com.skilldistillery.locations.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("locations/{id}")
	public Location getLocation(@PathVariable int id, HttpServletResponse res) {
		Location location = locationService.getLocation(id);
		if(location == null) {
			res.setStatus(404);
		}
		return location;
	}
	
	@PostMapping("locations")
	public Location createLocation(@RequestBody Location location, HttpServletResponse res, HttpServletRequest req) {
		Location created = null;
		try {
			created = locationService.create(location);
			res.setStatus(201);
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		return created;
	}
	
	@PutMapping("locations/{id}")
	public Location updateLocation(@RequestBody Location location, @PathVariable int id, HttpServletResponse res, HttpServletRequest req) {
		Location created = null;
		try {
			created = locationService.update(location, id);
			res.setStatus(201);
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		return created;
	}
	
	@DeleteMapping("locations/{id}")
	public Boolean deleteLocation(@PathVariable int id, HttpServletResponse res) {
		Boolean deleted = false;
		
		if(locationService.deleteById(id) ) {
			res.setStatus(204);
			deleted = true;
		} else {
			res.setStatus(404);
		}
		return deleted;
	}
}
