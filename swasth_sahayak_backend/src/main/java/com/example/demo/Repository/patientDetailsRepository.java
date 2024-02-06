package com.example.demo.Repository;

import com.example.demo.Entity.patient.PatientDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface patientDetailsRepository extends JpaRepository<PatientDetails, Integer> {
}
