--
-- PostgreSQL database dump
--

-- Dumped from database version 9.3.3
-- Dumped by pg_dump version 9.3.3
-- Started on 2014-03-10 16:55:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

DROP DATABASE pla;
--
-- TOC entry 1949 (class 1262 OID 24577)
-- Name: pla; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE pla WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';


\connect pla

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 1950 (class 1262 OID 24577)
-- Dependencies: 1949
-- Name: pla; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON DATABASE pla IS 'Database of PLA''s Application';


--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- TOC entry 1951 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 173 (class 3079 OID 11750)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 1952 (class 0 OID 0)
-- Dependencies: 173
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_with_oids = false;

--
-- TOC entry 170 (class 1259 OID 24578)
-- Name: USER_PROFILE; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "USER_PROFILE" (
    "USR_UID" bigint NOT NULL,
    "USR_EMAIL" character varying(255) NOT NULL,
    "USR_PASSWORD" character varying(40)[] NOT NULL,
    "USR_FIRSTNAME" character varying(255)[],
    "USR_MIDDLENAME" character varying(255)[],
    "USR_LASTNAME" character varying(255)[],
    "USR_HOME_ADDRESS" character varying(1000)[],
    "USR_COUNTRY" character varying(200)[],
    "USR_TELEPHONE" character varying(15)[],
    "USR_COMPANY" character varying(200)[],
    "USR_JOB_POSITION" character varying(200)[],
    "USR_IS_VERIFIED_ACCOUNT" boolean DEFAULT false NOT NULL,
    "USR_DATE_ADDED" timestamp without time zone NOT NULL,
    "USR_FACEBOOK_REF" character varying(255)[],
    "USR_GOOGLE_REF" character varying(255)[],
    "USR_TWITTER" character varying(255)[]
);


--
-- TOC entry 1953 (class 0 OID 0)
-- Dependencies: 170
-- Name: TABLE "USER_PROFILE"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE "USER_PROFILE" IS 'Store the users'' information for all users in the application.';


--
-- TOC entry 1954 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_EMAIL"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_EMAIL" IS 'Email instead of login id';


--
-- TOC entry 1955 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_PASSWORD"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_PASSWORD" IS 'Encoded password';


--
-- TOC entry 1956 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_IS_VERIFIED_ACCOUNT"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_IS_VERIFIED_ACCOUNT" IS 'True = Verified Account
False = Not Verified Account';


--
-- TOC entry 1957 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_DATE_ADDED"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_DATE_ADDED" IS 'Register date';


--
-- TOC entry 1958 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_FACEBOOK_REF"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_FACEBOOK_REF" IS 'Reference to facebook account';


--
-- TOC entry 1959 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_GOOGLE_REF"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_GOOGLE_REF" IS 'Reference to Google account';


--
-- TOC entry 1960 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_TWITTER"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN "USER_PROFILE"."USR_TWITTER" IS 'Reference to Twitter account';


--
-- TOC entry 172 (class 1259 OID 24587)
-- Name: USER_PROFILE_USR_UID_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "USER_PROFILE_USR_UID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 1961 (class 0 OID 0)
-- Dependencies: 172
-- Name: USER_PROFILE_USR_UID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "USER_PROFILE_USR_UID_seq" OWNED BY "USER_PROFILE"."USR_UID";


--
-- TOC entry 171 (class 1259 OID 24581)
-- Name: Z_TEST; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "Z_TEST" (
    "TST_INTEGER" integer,
    "TST_DATE" date,
    "TST_TEXT" text,
    "TST_CHARACTER" character(1)
);


--
-- TOC entry 1962 (class 0 OID 0)
-- Dependencies: 171
-- Name: TABLE "Z_TEST"; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON TABLE "Z_TEST" IS 'This table used for testing. So you should keep it in the development environment only.';


--
-- TOC entry 1829 (class 2604 OID 24589)
-- Name: USR_UID; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "USER_PROFILE" ALTER COLUMN "USR_UID" SET DEFAULT nextval('"USER_PROFILE_USR_UID_seq"'::regclass);


--
-- TOC entry 1942 (class 0 OID 24578)
-- Dependencies: 170
-- Data for Name: USER_PROFILE; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 1963 (class 0 OID 0)
-- Dependencies: 172
-- Name: USER_PROFILE_USR_UID_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"USER_PROFILE_USR_UID_seq"', 1, false);


--
-- TOC entry 1943 (class 0 OID 24581)
-- Dependencies: 171
-- Data for Name: Z_TEST; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO "Z_TEST" ("TST_INTEGER", "TST_DATE", "TST_TEXT", "TST_CHARACTER") VALUES (1, '2014-01-31', 'This is text', '1');


--
-- TOC entry 1832 (class 2606 OID 24615)
-- Name: USR_EMAIL_UNIQUE; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "USER_PROFILE"
    ADD CONSTRAINT "USR_EMAIL_UNIQUE" UNIQUE ("USR_EMAIL");


--
-- TOC entry 1834 (class 2606 OID 24597)
-- Name: USR_UID_PK; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "USER_PROFILE"
    ADD CONSTRAINT "USR_UID_PK" PRIMARY KEY ("USR_UID");


-- Completed on 2014-03-10 16:55:39

--
-- PostgreSQL database dump complete
--

