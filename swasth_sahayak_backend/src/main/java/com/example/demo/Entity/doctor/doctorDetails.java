package com.example.demo.Entity.doctor;

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
public class doctorDetails {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int doctor_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private int mobile_no;

    @Column(nullable = false)
    private Date dob;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String workingAddress;

    @Column(nullable = false)
    private int pinecode;

    @Column(nullable = false)
    private int blockcode;

    @Column(nullable = false)
    private int specialization;

}
