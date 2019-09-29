import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-dark"
    style={{ backgroundColor: 'black' }}
  >
    <div class="container">
      <a href="https://pubwriter.net" class="navbar-brand h1 mb-0">
        PubWriter
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a href="#" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sample Pages
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="realtor.md">
                Realtor
              </a>
              <a class="dropdown-item" href="resume.md">
                Resume
              </a>
              <a class="dropdown-item" href="markdown.md">
                Markdown
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tools
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="https://pubwriter.net/editor/">
                MD Writer
              </a>
              <a class="dropdown-item" href="https://pubwriter.net/convert/">
                MD Converter
              </a>
              <a
                class="dropdown-item"
                href="http://www.plugolabs.com/twitter-bootstrap-button-generator-3/"
              >
                Button Generator
              </a>
              <a
                class="dropdown-item"
                href="https://pubwriter.net/wordcount.md"
              >
                Word Counter
              </a>
              <a
                class="dropdown-item"
                href="https://www.google.com/search?q=color+tool"
              >
                Color Picker
              </a>
              <a
                class="dropdown-item"
                href="https://fontawesome.bootstrapcheatsheets.com"
              >
                Icons
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a href="https://pubwriter.com" class="nav-link">
              PubWriter
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Theme
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="#" data-file="/css/clean.css">
                Clean
              </a>
              <a class="dropdown-item" href="#" data-file="/css/dentist.css">
                Dentist
              </a>
              <a class="dropdown-item" href="#" data-file="/css/hacker.css">
                Hacker
              </a>
              <a class="dropdown-item" href="#" data-file="/css/winery.css">
                Winery
              </a>
              <a class="dropdown-item" href="#" data-file="/css/realtor.css">
                Realtor
              </a>
              <a
                class="dropdown-item"
                href="#"
                data-file="https://bucket.pubwriter.com/css/pw.css"
              >
                Travel
              </a>
              <a
                class="dropdown-item"
                href="#"
                data-file="https://biohacker.pubwriter.com/css/dark.css"
              >
                BioHacker
              </a>
              <a class="dropdown-item" href="#" data-file="/css/space.css">
                Space
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navigation
