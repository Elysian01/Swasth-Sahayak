package com.example.demo.Entity.patient;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Entity
@Table(name="patient_details")
public class PatientDetails {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int pid;

    @Column(nullable = false)
    private int abha_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private int mobile_no;

    @Column(nullable = false)
    private Date dob;

    @Column(nullable = false)
    private String preferred_language;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String Address;

    @Column(nullable = false)
    private int pinecode;

    @Column(nullable = false)
    private int blockcode;


}
