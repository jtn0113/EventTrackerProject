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
		return locationRepo.findById(id);
	}

	@Override
	public Location create(Location location) {
		return locationRepo.saveAndFlush(location);
	}

	@Override
	public Location update(Location location, int id) {
		Location managed = locationRepo.findById(id);
		if(managed != null) {
			managed.setShowTitle(location.getShowTitle());
			managed.setNameInShow(location.getNameInShow());
			managed.setLocation(location.getLocation());
			managed.setCity(location.getCity());
			managed.setState(location.getState());
			managed.setComments(location.getComments());
			managed.setImage(location.getImage());
		}
		return locationRepo.saveAndFlush(managed);
	}

	@Override
	public boolean deleteById(int id) {
		locationRepo.deleteById(id);
		
		return locationRepo.findById(id) == null;
	}

}
