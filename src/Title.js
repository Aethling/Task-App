import React from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

const Title = (props) =>
    	<section className="hero is-info">
        <div className="hero-body">
          <div className="container has-text-right">
            <h1 className="title">Task App </h1>
            <h5 className="subtitle">with React</h5>
          </div>
          </div>
          <Input addTask={props.addTask}
                handlePendingTask={props.handlePendingTask}
                pendingTask={props.pendingTask}/>

          <div className="hero-foot">
            <nav className="tabs is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <a onClick={props.setAllList}>All</a>
                  </li>
                  <li>
                    <a onClick={props.toggleCompletedList}>Completed</a>
                  </li>
                  <li>
                    <a onClick={props.togglePriorityList}>Priority!</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
      </section>

 Title.propTypes = {
      addTask: PropTypes.func.isRequired,
    } 
export default Title;

