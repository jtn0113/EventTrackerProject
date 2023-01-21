package com.skilldistillery.locations.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.locations.entities.Location;
import com.skilldistillery.locations.repositories.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService {
	
	@Autowired
	private LocationRepository locationRepo;

	@Override
	public List<Location> allLocations() {
		return locationRepo.findAll();
	}

	@Override
	public Location getLocation(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location create(Location location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location update(int id, Location location) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
