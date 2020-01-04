import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'This is a sample react beach resort site. It is created by developer vikram singh rajpurohit'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'We uses contentful in order to store the site content, which is a great content management tool'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'This is a sample react beach resort site. It is created by developer vikram singh rajpurohit'
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info:
          'This is a sample react beach resort site. It is created by developer vikram singh rajpurohit'
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
