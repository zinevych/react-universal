import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RemoteContent = ({ remoteItems, onClick }) => (
    <div className="remote-content">
      <h3>Example of handling remote data</h3>

      <div className="static-items-button col-md-2">
        <button type="button" className="btn btn-primary" onClick={onClick}>
          Update Data
        </button>
      </div>
      <div className="col-md-10">
        <div className={remoteItems.isFetching ? 'static-items-container' +
         ' loader' : 'static-items-container'}>
          <table className="table">
            <tbody>
            {remoteItems.items.map((remoteItem, index) =>
                    <tr key={index}>
                      <th>{remoteItem.id}</th>
                      <td>{remoteItem.userId}</td>
                      <td>{remoteItem.title}</td>
                      <td><Link type="button" className="btn btn-xs btn-info"
                                to={`/posts/${remoteItem.id}`}>Go to post {remoteItem.id}</Link></td>
                    </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-12">
        <hr />
      </div>
    </div>
);

RemoteContent.propTypes = {
  remoteItems: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }))
  }),
  onClick: PropTypes.func.isRequired
}

export default RemoteContent;