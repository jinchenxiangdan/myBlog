---
title: Data Warehousing and Online Analytical Processing
date: 2020-08-31 17:00:00
permalink: /pages/cc2473/
categories: 
  - studyingnotes
tags: 
  - Data Warehouse
sidebar: auto
---
# Data Warehousing and Online Analytical Processing

Data warehouses generalize and consolidate data in multidimensional space. The consturction  of data warehousees involves data cleaning, data integration and data transformation. Data warehouse provide a online analytical procesing tools for interactive analysis of multidimensional data of varied granularities, which facilitates effective data generalization and data mining.

## Data Warehouse: Basic Concepts

### What is a Data warehouse

Data warehousing provides architectures and tools for business executives to systematically
organize, understand, and use their data to make strategic decisions. Data
warehouse systems are valuable tools in today’s competitive, fast-evolving world.

> “A data warehouse is a subject-oriented, integrated, time-variant, and nonvolatile collection of data in support of management’s decision making process”           - William H. Inmon

In sum, a data warehouse is a semantically consistent data store that serves as a
physical implementation of a decision support data model. It stores the information
an enterprise needs to make strategic decisions. A data warehouse is also often viewed
as an architecture, constructed by integrating data from multiple heterogeneous sources
to support structured and/or ad hoc queries, analytical reporting, and decision making.

### Difference between Operational Database Systems and Data Warehouses

The major task of online operational database systems is to perform online transaction
and query processing. These systems are called **online transaction processing
(OLTP)** systems.

## Data Warehouse Modeling: Data Cube and OLAP

Data warehouses and OLAP tools are based on a multidimensional data model. This
model views data in the formof a data cube.

### Stars, Snowflakes, and Fact Constellations: Schemas for Multidimensional Data Models

#### Star Schema

The most common modeling paradigm is the star schema, in which the
data warehouse contains (1) a large central table (fact table) containing the bulk of
the data, with no redundancy, and (2) a set of smaller attendant tables (dimension
tables), one for each dimension. The schema graph resembles a starburst, with the
dimension tables displayed in a radial pattern around the central fact table.

#### Snowflake Schema

The snowflake schema is a variant of the star schema model,
where some dimension tables are normalized, thereby further splitting the data into
additional tables. The resulting schema graph forms a shape similar to a snowflake.

The major difference between the snowflake and star schema models is that the
dimension tables of the snowflake model may be kept in normalized form to reduce
redundancies.

#### Fact constellation

Sophisticated applications may require multiple fact tables to share
dimension tables. This kind of schema can be viewed as a collection of stars, and
hence is called a **galaxy schema** or a **fact constellation**.

#### OLAP operations

- Roll-up
- Drill-down
- Slice and dice
- Pivot
- Others:


## Data Warehouse design and Usage

## Data Warehouse implementation

## Data Generalization by attribute-Orented Induction

## Bibliographic Notes

## REFERENCE


<Valine></Valine>
