import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  const image = post.frontmatter.cover.childImageSharp.fluid;
  const title = post.frontmatter.title;
  const html = post.html;
  return (
    <Layout>
      <SEO
        title={title}
        description={post.frontmatter.description || post.excerpt || ' '}
        image={image}
        pathname={post.frontmatter.path}
        article
      />
      <Header title={title} cover={image} />
      <Container>
        <Content input={html} />
        <TagsBlock list={post.frontmatter.tags || []} />
      </Container>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
         query($pathSlug: String!) {
           markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
             html
             frontmatter {
               title
               tags
               cover {
                 childImageSharp {
                   fluid(
                     maxWidth: 1920
                     quality: 90
                     duotone: {
                       highlight: "#f7e0a2"
                       shadow: "#E7BB41"
                       opacity: 60
                     }
                   ) {
                     ...GatsbyImageSharpFluid_withWebp
                   }
                   resize(width: 1200, quality: 90) {
                     src
                   }
                 }
               }
             }
           }
         }
       `;
