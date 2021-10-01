... IN PROGRESS

# BugFinder-Framework
This is a framework dedicated to automating finding bugs in source artefacts based on measurements 
and machine learning algorithms.

This framework´s main use case is researching correlations between measurements and bug occurrence.
It addresses reusability, modifiability and portability (adaptability, installibility and replaceability) 
of components needed to research correlations between source artefact measurements and bug occurrence. 

Different researchers should be able to exchange components of the bugfinder program and therefore
be able to distribute research among researchers world wide. With all needed components given
you should be able to automatically analyse code and find localities with high bug probability.

# Table of Contents  
- [BugFinder-Framework](#bugfinder-framework)
- [Introduction](#introduction)
  * [Recording by example - intuition](#recording-by-example---intuition)
  * [Preprocessing by example - intuition](#preprocessing-by-example---intuition)
  * [Feature extraction - intuition](#feature-extraction---intuition)
  * [Training - intuition](#training---intuition)
- [Quick start](#quick-start)
- [Usage: Researcher](#usage--researcher)
- [Component realisations available](#component-realisations-available)
<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Introduction
The whole process beginning with recording until classification of localities is designed with a
standard machine learning pipeline:
![Machine_Learning_Pipeline](./doc/MLPipeline.svg)
![Recording_Phase](./doc/recording-phase.svg)

Researchers want to develop or use others´ implementation of the components needed to realise
this machine learning pipeline.

## Recording by example - intuition
All used examples in the following documentations are already implemented and ready to use. 

Record all features. F.e. record all Lines Of Code for each file in each Commit.

1. You first need to record all localities, CommitPaths, of a repository. 
A CommitPath is a path in a commit.

2. After that you can preprocess your CommitPaths. For example filtering all the paths you do not
want to quantify, like .txt-, .md-files and only keep CommitPaths with paths in src ending with .ts.

3. After that you want to quantify your CommitPaths, f.e. with the SonarQubeQuantifier. Therefore getting 
a map of CommitPaths to SonarQubeMeasurements.

4. You might also want to annotate you localities so that you have labels needed 
for suppervised learning algorithms. You can label your CommitPaths with analyzing the Commit-message
for semantic key words like "bug, fix, error, fail" indicating a correction of a bug.

Now you have a database of localities, quantifications (features) and annotations (classes).

## Preprocessing by example - intuition
Preprocess your data from the recording phase.

F.e.: Find the last 3 changes of a CommitPath with a bug indicating commit message. Those changes
are localities by them self: CommitPaths. Now you can analyse the changes made before a CommitPath
got a bug. F.e. the max. added Lines Of Code in a change. 

In the training phase you might find statistical correlation between the amount of lines of codes 
added in one single change and the likelyhood of a bug beeing fixed later in that file. Therefore
indicating a bug added in that file.

## Feature extraction - intuition
t.b.a.

## Training - intuition
t.b.a.


# Quick start
The best way to start is to clone the examples repository and make changes there.


## 1. Recording
### 1.1 Record localities

### 1.2 Preprocess localities

### 1.3 Quantify localities

### 1.4 Annotate localities

## 2. Preprocessing

## 3. Feature Extraction

## 4. Training



t.b.a

# Usage: Researcher
t.b.a.

# Component realisations available
You can find different components realisations open source on github and npm.
