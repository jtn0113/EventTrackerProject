package com.skilldistillery.locations.services;

import java.util.List;

import com.skilldistillery.locations.entities.Location;

public interface LocationService {
	List<Location> allLocations();
	Location getLocation(int id);
	Location create(Location location);
	Location update(Location location, int id);
	boolean deleteById(int id);
}
