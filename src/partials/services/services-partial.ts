import { css, html } from "lit";
import "@material/web/labs/card/outlined-card.js";
import "@material/web/button/outlined-button.js"

export const servicesPartial = html`
<section class="services">
  <h2 class="headline-large">How I Can Help You?</h2>
  <p class="title-medium">
    Struggling with digital marketing or website challenges? 
    Let's work together to find the right solutions for your business. 
    I offer personalized consulting and hands-on implementation to drive growth and achieve your goals.
  </p>
  <div class="services-container">
    <md-outlined-card>
      <div class="card-title">
        <h3 class="title-large">
          Web Development & Optimization
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
      </div>
      <p class="title-small">Build the website of your dreams</p>
      <p>
        Crafting high-performance websites that captivate users and drive results. 
        From modern front-end development to seamless backend integration, I'll ensure 
        your website is a powerful tool for achieving your business goals.
      </p>
    </md-outlined-card>

    <md-outlined-card>
      <div class="card-title">
        <h3 class="title-large">
          Digital Analytics & Insights
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m105-233-65-47 200-320 120 140 160-260 109 163q-23 1-43.5 5.5T545-539l-22-33-152 247-121-141-145 233ZM863-40 738-165q-20 14-44.5 21t-50.5 7q-75 0-127.5-52.5T463-317q0-75 52.5-127.5T643-497q75 0 127.5 52.5T823-317q0 26-7 50.5T795-221L920-97l-57 57ZM643-217q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm89-320q-19-8-39.5-13t-42.5-6l205-324 65 47-188 296Z"/></svg>  
      </div>
      <p class="title-small">Unlock Your Data's Potential</p>
      <p>
      Uncover hidden opportunities and make informed decisions with data-driven insights. 
      I'll help you track, measure, and analyze your online performance to optimize your 
      marketing strategies and achieve measurable success.
      </p>
    </md-outlined-card>

    <md-outlined-card>
      <div class="card-title">
        <h3 class="title-large">
          A/B Testing & Conversion Rate Optimization
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>
      </div>
      <p class="title-small">Optimize Your Conversions</p>
      <p>
        Turn visitors into customers with data-backed experimentation. I'll design and implement rigorous A/B 
        tests to identify the most effective strategies for boosting conversions and maximizing your ROI.
      </p>
    </md-outlined-card>

    <md-outlined-card>
      <div class="card-title">
        <h3 class="title-large">
          Website Rebuild Consulting
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
      </div>
      <p class="title-small">Ensure a Successful Website Launch</p>
      
      <p>
        Navigate website rebuilds with confidence and avoid costly mistakes. 
        I'll guide you through the entire process, from requirements 
        gathering to technical implementation, ensuring a seamless 
        transition and a website that delivers results.
      </p>
    </md-outlined-card>

    <md-outlined-card>
      <div class="card-title">
        <h3 class="title-large">
          Website Performance Optimization
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg>
      </div>
      <p class="title-small">Accelerate Your Website</p>
      <p>
      Slow websites frustrate users and cost you sales. I'll optimize your 
      website's performance, ensuring lightning-fast load times and a seamless 
      user experience. Data-driven techniques and proven strategies will boost 
      your conversions and maximize your online success.
      </p>
    </md-outlined-card>
  </div>
</section>
`;

export const servicesStyle = css`
.services {
  padding: 2rem;

  & h2 {
    font-weight: 700;
  }

  & .title-small {
    color: var(--md-sys-color-on-primary-container);
  }

  & .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 65ch));
    gap: 1rem;
    margin-block-start: 2rem;
  }

  md-outlined-card {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & h3 {
      font-weight: 700;
    }

    .card-title {
      display: flex;
      justify-content: space-between;
    }
  }

  & .title-medium {
    max-width: 75ch;
    text-wrap: balance;
    margin-block-start: 1rem;
  }
}
`;