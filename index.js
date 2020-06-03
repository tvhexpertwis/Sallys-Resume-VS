'use strict';

/* globals ReactDOM */

function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />

      <main>
        <section role='region'>
          <address role='contact-info'>
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Picutre of Sally with crossed arms" />
            <p>Name: {props.name}</p>
            <p>Email: sallystudent@gmail.com</p>
            <p>Phone Number: 312.555.2376</p>
            <p>Address: 555 Golden Court, Chicago, IL 60608</p>
          </address>
        </section>

        <section role='region'>
          <h2>Employment History</h2>
          <ul>
            <li>
              <p>Epic, Inc</p>
              <p>Software Engineer</p>
              <p>2019-Present</p>
              <p>Developed world class software</p>
            </li>
            <li>
              <p>Fedex</p>
              <p>Delivery Driver</p>
              <p>2016-2019</p>
              <p>Delivered packages</p>
            </li>
          </ul>
        </section>

        <section role='region'>
          <h2>Education</h2>
          <ul>
            <li>
              <p>University of Arizona</p>
              <p>Thinkful Degree</p>
              <p>2012-2016</p>
              <p>GPA: 4.0</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

App.defaultProps = {
  name: 'Sally Student'
};


ReactDOM.render(
  <App name="Billy Smith"/>,
  document.querySelector('#root')
);