"use client";

import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

function AppNavbar() {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container" fluid>
        <Link className="d-flex align-items-center" href="/">
          <Image
            className="navbar-logo"
            src={"/nice-a.png"}
            alt="app logo"
            width={45}
            height={45}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/pages/upcoming">
              <h6
                className={
                  pathname == "/pages/upcoming"
                    ? "navigation-link navigation-link-active"
                    : "navigation-link navigation-link-inactive"
                }
              >
                Upcoming
              </h6>
            </Link>

            <Link href="/pages/trending">
              <h6
                className={
                  pathname == "/pages/trending"
                    ? "navigation-link navigation-link-active"
                    : "navigation-link navigation-link-inactive"
                }
              >
                Trending
              </h6>
            </Link>

            <Link href="/pages/most-rated">
              <h6
                className={
                  pathname == "/pages/most-rated"
                    ? "navigation-link navigation-link-2 navigation-link-active navigation-link-active-2"
                    : "navigation-link navigation-link-2 navigation-link-inactive"
                }
              >
                Most Rated
              </h6>
            </Link>

            <Link href="/pages/blog">
              <h6
                className={
                  pathname == "/pages/blog"
                    ? "navigation-link navigation-link-2 navigation-link-active"
                    : "navigation-link navigation-link-2 navigation-link-inactive"
                }
              >
                Blog
              </h6>
            </Link>
            <Link href="/pages/news">
              <h6
                className={
                  pathname == "/pages/news"
                    ? "navigation-link navigation-link-2 navigation-link-active"
                    : "navigation-link navigation-link-2 navigation-link-inactive"
                }
              >
                News
              </h6>
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
