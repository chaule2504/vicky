import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>YEN VY NGUYEN (VICKY)</h1>

      <ul>
        <li>Email: Yenvy.nguyen0405@gmail.com</li>
        <li>Address: Unit 611A, 7-9 Kent Road, Mascot, NSW 2020</li>
        <li>0478 707 689</li>
      </ul>

      <h2>CAREER OBJECTIVE</h2>

      <p>Ambitious, hardworking and willing-to-learn graduate seeking for graduate role in Business
        Analysis area. Equipped with basic knowledge and technical skills in BA. Strong attention to
        detail, excellent time management and proven active listener.</p>

      <h2>SKILLS SUMMARY</h2>

      <h3>Technical Skills</h3>

      <ul>
        <li>Proficiency in basic office applications (Word, Excel, PowerPoint, MS Visio,
          PowToon)</li>
        <li>Data base: MySQL, SQL</li>
        <li>Data Visualization: MS Excel, Google Chart,
          Zoho analytics</li>
        <li>Business analytic tool: Google Ads, Google
          analytic</li>
      </ul>

      <h3>Qualitative Skills</h3>

      <ul>
        <li>Analysis and Problem Solving</li>
        <li>Oral and written communication Skill</li>
        <li>Report Writing and Presenting</li>
        <li>Industry knowledge</li>
      </ul>

      <h2>EDUCATION</h2>

      <table>
        <tr>
          <td>
            <b>Australia Technical and Management College</b><br />
            Professional Year (IT)
          </td>

          <td>
            2021 – Present
          </td>
        </tr>

        <tr>
          <td>
            <b>Federation University (Sydney Campus)</b><br />
            Master of Business Analysis (Enterprise System)
          </td>

          <td>2018 – 2020</td>
        </tr>

        <tr>
          <td>
            <b>Western Sydney University, Sydney</b><br />
            Master of Business Administration
          </td>

          <td>2015 - 2017</td>
        </tr>
      </table>

      <h2>UNIVERSITY PROJECTS</h2>

      <ul>
        <li>Developed business plan for a small medium sized café in inner-Sydney. This included
          establishing vision, mission, strategic statement, conducting SWOT analysis, financial
          plan, marketing plan, risk management plan and backup plan</li>
        <li>Together with teammate, built a software to management the customer profile for a
          local company in Sydney which provide the solution for customer to help to improve
          their business performance. This including communicating with client, establish a set of
          software specifications, building business process chart, step by step complete the
          software, testing the software and delivering the final product.</li>
      </ul>

      <h3>EMPLOYMENT</h3>

      <p>ZURE Pty Ltd,
        Junior Business Analyst</p>

      <p>April 2022-
        present</p>

        <ul>
          <li>Assist backend team to update the website interface including design, function and
work flow by establishing user stories, use cases in order to improve customer
experience and create more opportunities for upper sale and cross sale

          </li>
          <li>Updating and maintaining website: uploading new products on website, updating new
information and picture for current products. Assist to improve the process by
discovering and implementing solutions to better streamline current methods and build
into workflow

          </li>
          <li>Assisting with Marketing Plan and strategy: doing market research and analyse
competitors’ strategy about price, promotion and marketing. Generating the report
with charts and diagrams by using data visualizing tools to support for company
decision making process

          </li>
          <li>
          Regularly analysing customer experience on company website and business processes
as well as the effectiveness and friendliness of company website interface.
Implementing relevant Shopify APIs to improve the effectiveness and efficiency of
current work flow and customer experience
          </li>
          <li>
          Assist in building ZURE FAQ manual for user experience: assist with customer service
task and record all enquiries from customer. Build the general manual instruction for
customer service team and recommend any updated required for the website to
improve the customer satisfaction
          </li>
          <li>
          Customer data base updating
          </li>
          <li>
          Analysing marketing effectiveness by using tools in Google Ads and Google Analytic.
Tracking lead and conversion rate. Comparing the conversion rate from Google Ads and
other channel such as YouTube, Social media and direct sale then support for marketing
budgeting plan
          </li>
          <li>
          Support with company brand name Google Ads campaign by creating, editing and
uploading four commercial videos every month
          </li>
        </ul>

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
