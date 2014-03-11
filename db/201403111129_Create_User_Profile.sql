--
-- PostgreSQL database dump
--

-- Dumped from database version 9.3.3
-- Dumped by pg_dump version 9.3.3
-- Started on 2014-03-11 11:47:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 170 (class 1259 OID 24662)
-- Name: USER_PROFILE; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
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


ALTER TABLE public."USER_PROFILE" OWNER TO postgres;

--
-- TOC entry 1946 (class 0 OID 0)
-- Dependencies: 170
-- Name: TABLE "USER_PROFILE"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE "USER_PROFILE" IS 'Store the users'' information for all users in the application.';


--
-- TOC entry 1947 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_EMAIL"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_EMAIL" IS 'Email instead of login id';


--
-- TOC entry 1948 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_PASSWORD"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_PASSWORD" IS 'Encoded password';


--
-- TOC entry 1949 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_IS_VERIFIED_ACCOUNT"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_IS_VERIFIED_ACCOUNT" IS 'True = Verified Account
False = Not Verified Account';


--
-- TOC entry 1950 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_DATE_ADDED"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_DATE_ADDED" IS 'Register date';


--
-- TOC entry 1951 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_FACEBOOK_REF"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_FACEBOOK_REF" IS 'Reference to facebook account';


--
-- TOC entry 1952 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_GOOGLE_REF"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_GOOGLE_REF" IS 'Reference to Google account';


--
-- TOC entry 1953 (class 0 OID 0)
-- Dependencies: 170
-- Name: COLUMN "USER_PROFILE"."USR_TWITTER"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN "USER_PROFILE"."USR_TWITTER" IS 'Reference to Twitter account';


--
-- TOC entry 171 (class 1259 OID 24669)
-- Name: USER_PROFILE_USR_UID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "USER_PROFILE_USR_UID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."USER_PROFILE_USR_UID_seq" OWNER TO postgres;

--
-- TOC entry 1954 (class 0 OID 0)
-- Dependencies: 171
-- Name: USER_PROFILE_USR_UID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "USER_PROFILE_USR_UID_seq" OWNED BY "USER_PROFILE"."USR_UID";


--
-- TOC entry 1828 (class 2604 OID 24677)
-- Name: USR_UID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "USER_PROFILE" ALTER COLUMN "USR_UID" SET DEFAULT nextval('"USER_PROFILE_USR_UID_seq"'::regclass);


--
-- TOC entry 1940 (class 0 OID 24662)
-- Dependencies: 170
-- Data for Name: USER_PROFILE; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 1955 (class 0 OID 0)
-- Dependencies: 171
-- Name: USER_PROFILE_USR_UID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"USER_PROFILE_USR_UID_seq"', 1, false);


--
-- TOC entry 1830 (class 2606 OID 24679)
-- Name: USR_EMAIL_UNIQUE; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "USER_PROFILE"
    ADD CONSTRAINT "USR_EMAIL_UNIQUE" UNIQUE ("USR_EMAIL");


--
-- TOC entry 1832 (class 2606 OID 24681)
-- Name: USR_UID_PK; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "USER_PROFILE"
    ADD CONSTRAINT "USR_UID_PK" PRIMARY KEY ("USR_UID");


-- Completed on 2014-03-11 11:47:11

--
-- PostgreSQL database dump complete
--

