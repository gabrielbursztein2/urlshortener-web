import React from "react";
import Table from "react-bootstrap/Table";
import './styles.css';

const TopUrl = ({ topUrl = [] }) => {
  return (
    <Table striped bordered hover className="results-table">
      <thead>
        <tr>
          <th>URL</th>
          <th>Short URL</th>
          <th>Visits</th>
        </tr>
      </thead>
      <tbody>
        {topUrl.map((url) => (
          <tr key={url.id}>
            <td>{url.url}</td>
            <td>{url.shortUrl}</td>
            <td>{url.visits}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TopUrl;
