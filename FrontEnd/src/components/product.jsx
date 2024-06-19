import React, { Fragment } from "react";
import "../styles/product.css";
import { Navbar } from "./Navbar";

export function Product() {
  return (
    <>
    <div className="wrapper">

    
    <div className="banner-main">
    <div className="container">
    <div className="banner-area">
        <div className="left-area">
            <h1>Explore Millions of Icons - Free Download!</h1>
            <p>Dive into the Ultimate Collection of Vector Icons: Download in SVG, EPS, PSD, and BASE 64 Formats.</p>
        </div>
        <div className="right-area">
            <img src="/banner-image.png" />
        </div>
    </div>
    </div>
    </div> 
    <main className="content-area">
     <div className="filter-stickybar d-md-block">
      <div className="filter-tabrow d-flex align-content-center">
        <div className="filter-toggle align-items-center">
          <button
            variant="light"
            className="filter-btn d-flex align-items-center"
            type="button"
            onClick="toggleClass"
          >
            <i className="icons icons-filter"></i>
            <span>Filters</span>
          </button>
          <button
            variant="light"
            className="close-btn no-hover"
            data-icon="b"
            onClick="toggleClass()"
          ></button>
        </div>
        
      </div>
    </div>
    <section className="page-content">
    
  <div className="filter-toggle filter-sidebar d-md-block d-none">
    <div className="filter-collapse px-24 py-20">
      <b-form-checkbox
        switch
        size="lg"
        className="right-switch"
        onChange="
          addQueryParam({
            paramName: 'icon_exclusive',
            paramValue: iconExclusive.toString(),
          })
        "
        v-model="iconExclusive"
        >Iconscout Exclusive</b-form-checkbox
      >
    </div>
    <div className="filter-collapse">
      <button
        className="toggle-button"
        variant="light"
        data-icon="c"
      >
        Assets
      </button>
      <div id="collapse-1" className="mt-2" visible>
        <div>
          <div>
            <div
              className="radio-group"
              v-model="asset"
              button-variant="light"
              name="asset"
              stacked
              onChange="onAssetChange"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div className="filter-collapse">
      <button
        className="toggle-button"
        variant="light"
        data-icon="c"
      >
        Price
      </button>
      <div id="collapse-2" className="mt-2" visible>
        <div>
          <div>
            <div
              className="radio-group"
              v-model="price"
              button-variant="light"
              name="prices"
              stacked
              onChange="addQueryParam({ paramName: 'price', paramValue: price })"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div className="filter-collapse">
      <button
        className="toggle-button"
        variant="light"
        data-icon="c"
      >
        View
      </button>
      <div id="collapse-3" className="mt-2">
        <div>
          <div>
            <div
              className="radio-group"
              v-model="view"
              button-variant="light"
              name="views"
              stacked
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div className="filter-collapse">
      <button
        className="toggle-button"
        variant="light"
        data-icon="c"
      >
        Sort by
      </button>
      <div id="collapse-4" className="mt-2" visible>
        <div>
          <div>
            <div
              className="radio-group"
              v-model="sortBy"
              button-variant="outline-primary"
              name="sortBy"
              stacked
              onChange="addQueryParam({ paramName: 'sort', paramValue: sortBy })"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div className="filter-collapse">
      <button
        className="toggle-button"
        variant="light"
        data-icon="c"
      >
        Categories
      </button>
      <div id="collapse-5" className="mt-2">
        <div>
          <div>
            <b-list-group className="list-items">
              <b-list-group-item
                variant="dark"
                onClick="handleCategorySelection(category.value)"
              >
                category.text
              </b-list-group-item>
            </b-list-group>
          </div>
        </div>
      </div>
    </div>
  </div> 

      <div className="tabs-content">
        <ul className="result-block layoutClass">
        <li >
          <article >
            <a href="#">
              <figure v-if="icon.urls.png_256">
                <img src="icon.urls.png_256" />
              </figure>
sd
              <video
                width="100%"
                autoplay
                loop
                
                v-else
              >
                <source src="icon.urls.thumb" type="video/mp4" />
                No video support
              </video>
            </a>

            <div className="box-overlay">
              <h2>title item</h2>
              <button className="icons icons-add"></button>
              <button
                className="icons icons-download"
              ></button>
            </div>
 
          </article>
        </li>
      </ul>
      </div>
    </section>
  </main>
    </div>
    
    </>
  );
}
