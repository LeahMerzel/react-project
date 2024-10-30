// Sidebar.js

import React from 'react';
import { Accordion, Nav } from 'react-bootstrap';
import topics from '../data/Topics.json';
import { Link } from 'react-router-dom';
import '../style/SidebarStyles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Accordion defaultActiveKey="0" flush>
        {Object.entries(topics).map(([groupName, subtopics], index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{groupName}</Accordion.Header>
            <Accordion.Body>
              <Nav className="flex-column">
                {subtopics.map((topic, subIndex) => (
                  <Nav.Link
                    as={Link}
                    to={topic.path}
                    key={subIndex}
                    className="pl-3"
                  >
                    {topic.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
