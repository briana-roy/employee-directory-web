import React, { Component } from 'react';

// Internal Routes
import Employee from './Employee';
import '../App.scss';

class List extends Component {
  constructor(props) {
    super(props);
  };

  render() {

  if (this.props.category === 'Employees') {
    return (
      <div className="app-body">
        <div className="container">
          <div className="header">
            <h2>Listing {this.props.category}</h2>
          </div>
            <div className="employees">
              {
                this.props.list.length > 0 ? (
                  this.props.list.map(employee => {
                    return (
                      <Employee
                         key={employee.id}
                         id={employee.id}
                         name={employee.name}
                         email={employee.name}
                         phone={employee.phone}
                         image={employee.image}
                         position={employee.position}
                         location={employee.location}
                      />
                    )
                  })
                ) :
                (<div className="employees">
                  <h4> There are no {this.props.category}</h4>
                </div>)
              }
              </div>
          </div>
        </div>
      );
    } else if(this.props.category === 'Departments') {
      return (
        <div className="app-body">
          <div className="container">
            <div className="header">
              <h2>Listing {this.props.category}</h2>
            </div>
            <div className="employees">
              {
                this.props.list.length > 0 ? (
                  this.props.list.map(item => {
                    return (
                      <div className="department">
                            <h3>{item}</h3>
                      </div>
                    );
                  })
                ) :
                (
                  <div className="employees">
                    <h4> There are no Departments</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      } else if(this.props.category === 'Locations'){
        return (
          <div className="app-body">
            <div className="container">
              <div className="header">
                <h2>Listing {this.props.category}</h2>
              </div>
              <div className="employees">
                {
                  this.props.list.length > 0 ? (
                    this.props.list.map(item => {
                      return (
                        <div className="location">
                          <img className="location-image" src={item.image} alt="Photo of {name}" />
                            <h3>{item.name}</h3>
                            <span className="location-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                        </div>
                      );
                    })
                  ) :
                  (
                    <div className="employees">
                      <h4> There are no Locations</h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
      }
    }
  };

export default List;
