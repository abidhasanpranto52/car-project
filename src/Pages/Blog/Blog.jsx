import React from "react";

const Blog = () => {
  return (
    <div className="p-7">
      <div>
        <p className="font-semibold text-2xl text-red-700">
          1.What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p>
          <span className="font-semibold">Ans : </span>{" "}
          <span className="font-semibold">1. Access Token: </span>
          An access token is a credential that is issued by an authentication
          server upon successful authentication. It is a short-lived token that
          grants access to specific resources or APIs on behalf of the user or
          client application. The access token is usually included in the
          headers or authorization section of API requests to authenticate the
          user or client.
          <br />
          <span className="font-semibold">2. Refresh Token: </span>A refresh
          token is a long-lived token that is also issued by the authentication
          server during the initial authentication process. Unlike access
          tokens, refresh tokens are not sent with each API request. Instead,
          they are used to obtain a new access token once the current access
          token expires. Refresh tokens provide a way to maintain continuous
          authentication without requiring the user to re-enter their
          credentials.
        </p>
        <p>
          <span className="font-semibold">1. Access Token Stored In: </span>{" "}
          These tokens should be stored securely on the client-side to prevent
          unauthorized access. A common approach is to store them in an
          HTTP-only cookie or in the browser's memory (using localStorage or
          sessionStorage) <br />
          <span className="font-semibold">
            2. Refresh Token Stored In:{" "}
          </span>{" "}
          Refresh tokens are more sensitive and should be stored securely. It is
          recommended to store them in an HTTP-only cookie, which adds an
          additional layer of protection against cross-site scripting attacks.
          By storing refresh tokens in an HTTP-only cookie, they are
          inaccessible to JavaScript and can only be used by the server when
          making token refresh requests.
        </p>
      </div>
      <div>
        <p className="font-semibold text-2xl text-red-700">
          2. Compare SQL and NoSQL databases?
        </p>
        <p>
          <span className="font-semibold">Ans : </span> <br />
          1. SQL databases are relational, and NoSQL databases are
          non-relational. <br /> 2.SQL databases use structured query language
          (SQL) and have a predefined schema. NoSQL databases have dynamic
          schemas for unstructured data. <br /> 3.SQL databases are vertically
          scalable, while NoSQL databases are horizontally scalable. <br />{" "}
          4.SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. <br /> 5.SQL databases are
          better for multi-row transactions, while NoSQL is better for
          unstructured data like documents or JSON.
        </p>
      </div>
      <div>
        <p className="font-semibold text-2xl text-red-700">
          3. What is express js? What is Nest JS?
        </p>
        <p>
          <span className="font-semibold">Ans : </span>
          Express is a minimalist and flexible framework that is easy to use and
          has a large community of developers. <br />
          NestJS, on the other hand, is a newer framework that provides
          additional features such as dependency injection, a modular
          architecture, and an intuitive CLI.
        </p>
      </div>
      <div>
        <p className="font-semibold text-2xl text-red-700">
          4. What is MongoDB aggregate and how does it work?
        </p>
        <p>
          <span className="font-semibold">Ans : </span>
          In MongoDB, the aggregate function is used to perform advanced data
          processing and analysis on collections. It allows you to perform
          computations, transformations, and aggregations on the data within the
          MongoDB database. The aggregate function takes an array of stages as
          its argument. Each stage represents a specific operation or
          transformation to be performed on the data. The stages are processed
          in order, and the output of one stage serves as the input for the next
          stage.
        </p>
      </div>
    </div>
  );
};

export default Blog;
