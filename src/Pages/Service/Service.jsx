import React from "react";

const Service = () => {
  return (
    <div>
      <div class="service">
        <div class="container service-container text-center">
          <h1>The Most Comprehensive Care in the Industry</h1>
          <p> OUR PROGRAM MEETS YOUR NEEDS TODAY AND TOMORROW</p>
          <div class="row service-row">
            <div class="col-md-6 text-center ">
              <div
                class="card text-light text-center bg-dark  service-box"
                style="width: 28rem;"
              >
                <i class="fa-solid fa-hands-holding-circle fs-1"></i>
                <div class="card-body">
                  <h5 class="card-title fw-bold">Care and Companionship</h5>
                  <p class="card-text fw-semibold">
                    Customized care from helpful, compassionate Caregivers.
                  </p>
                  <a href="/" class="btn bg-warning fw-semibold">
                    Learn More
                  </a>
                </div>
              </div>
              <div
                class="card text-light text-center bg-dark service-box"
                style="width: 28rem;"
              >
                <i class="fa-solid fa-clock fs-1"></i>
                <div class="card-body">
                  <h5 class="card-title fw-bold">24-Hour Monitoring</h5>
                  <p class="card-text fw-semibold">
                    Ensuring safety around the clock with 24/7 response.
                  </p>
                  <a href="/" class="btn bg-warning fw-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card text-light text-center bg-dark service-box"
                style="width: 28rem;"
              >
                <i class="fa-solid fa-phone-volume fs-1"></i>
                <div class="card-body">
                  <h5 class="card-title fw-bold">Wellness Calls</h5>
                  <p class="card-text fw-semibold">
                    Scheduled check-ins throughout the <br /> day and week.
                  </p>
                  <a href="/" class="btn  bg-warning fw-semibold">
                    Learn More
                  </a>
                </div>
              </div>
              <div
                class="card text-light text-center bg-dark service-box"
                style="width: 28rem;"
              >
                <i class="fa-solid fa-rectangle-list fs-1"></i>
                <div class="card-body">
                  <h5 class="card-title fw-bold">Nutrition & Well Being</h5>
                  <p class="card-text fw-semibold">
                    Healthy meals delivered
                    <br /> or prepared.
                  </p>
                  <a href="/" class="btn bg-warning fw-semibold">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
