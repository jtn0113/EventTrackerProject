package com.skilldistillery.locations.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.locations.entities.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {

}
