import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const AroundPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* text-align: center; */
  margin: 4rem 6rem 1rem 6rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Button = styled.div`
  color: ${props => props.theme.colors.white.light};
  background-color: ${props => props.theme.colors.black.blue};
  text-align: center;
  padding: 1rem;
  width: 300px;
  margin-bottom: 5rem;
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.02);
  };
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Sharkey-Chefs'} />
      <Header title="Sharkey-Chefs">
        A collection of delicious recipes that Nicole, Maika and Nick can eat.
      </Header>
      <AroundPosts>
        <p>
          All recipes have been vetted or edited to prevent food allergies.
        </p>
        <br />
        <p>
          Check out the <Link to="/restrictions">Restrictions</Link> page for
          the list of foods we avoid if you want to cook a dish not on the
          list.
        </p>
        <p>
          <u>Some of our favorites recipes:</u>
        </p>
      </AroundPosts>
      <PostWrapper>
        {edges.map(({ node }) => (
          <PostList
            key={node.id}
            cover={node.frontmatter.cover.childImageSharp.fluid}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
          />
        ))}
      </PostWrapper>
      <AroundPosts>
        <Link to="/blog">
          <Button>See all the recipes</Button>
        </Link>
      </AroundPosts>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            description
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
