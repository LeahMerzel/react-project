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
        {Object.entries(topics).map(([groupName, subheadings], index) => (
          <Accordion.Item eventKey={`group-${index}`} key={`group-${index}`}>
            <Accordion.Header>{groupName}</Accordion.Header>
            <Accordion.Body>
              <Accordion>
                {Object.entries(subheadings).map(
                  ([subheadingName, topicsArray], subIndex) => (
                    <Accordion.Item
                      eventKey={`sub-${index}-${subIndex}`}
                      key={`sub-${index}-${subIndex}`}
                    >
                      <Accordion.Header>{subheadingName}</Accordion.Header>
                      <Accordion.Body>
                        <Nav className="flex-column">
                          {topicsArray.map((topic, topicIndex) => (
                            <Nav.Link
                              as={Link}
                              to={topic.path}
                              key={`topic-${index}-${subIndex}-${topicIndex}`}
                              className="pl-3"
                            >
                              {topic.name}
                            </Nav.Link>
                          ))}
                        </Nav>
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                )}
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
