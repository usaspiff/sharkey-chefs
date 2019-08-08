import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Restrictions = center => (
  <Layout>
    <Helmet title={'Food restrictions'} />
    <Header title="Food restrictions">
      Food restrictions for Nicole, Nick and Maika
    </Header>
    <Container>
      <h3>Food Restrictions for Nicole</h3>
      <h5>Nicole - NO foods:</h5>
      <ul>
        <li>
          Eggs or egg products (e.g. mayo). Eggs can be replaced with Ener-G egg
          replacer, 3 Tbsp aquafaba (the liquid from a can of chickpeas or white
          beans), or applesauce, depending on what you are making.
        </li>
        <li>
          Spices: e.g. chili, mustard, black or white pepper, paprika, ginger,
          cinnamon, cardamom, coriander, curry, cumin, turmeric
        </li>
        <li>Ginger</li>
        <li>Garlic</li>
        <li>
          Dairy products (including cow, goat and sheep) (e.g. milk,yogurt,
          icecream) - a little butter is OK
        </li>
        <li>Nuts</li>
        <li>Black beans</li>
        <li>Pinto beans</li>
        <li>Navy Beans</li>
        <li>Green beans</li>
        <li>Kiwi</li>
        <li>Figs</li>
        <li>Flax seeds</li>
        <li>Vinegar</li>
        <li>
          Any prepackaged product - most likely it will include one of the above
          spices, wheat, eggs or dairy. (Most deli sliced turkey contains milk.
          Most dried pork and beef products have spices.) Applegate farms
          roasted Turkey breast is allergen-free
          (http://www.applegate.com/products/organic-roasted-turkey-breast)
        </li>
        <li>
          Most broths and bouillon have garlic, pepper, etc. I like to use the
          Pacific brand - some of their organic Chicken Broths are made with
          just water, chicken, onion and rosemary extract.
        </li>
      </ul>
      <h5>Nicole - YES foods:</h5>
      <ul>
        <li>All veggies except green beans and kale</li>
        <li>Onions, shallots, chives are OK</li>
        <li>
          All potatoes and squashes except yams (the orange ones) (FYI Nick
          can’t eat sweet potatoes, rutabega or parsnips - see below).
        </li>
        <li>Lentils, chickpeas, black eyed peas, white beans, dried peas</li>
        <li>
          All meats (cooked from scratch or with prepared with no added spices)
        </li>
        <li>All fish</li>
        <li>All seafood</li>
        <li>All fruits except kiwi, figs</li>
        <li>All kinds of rice (includes rice flours)</li>
        <li>Other grains: quinoa, oats, corn, etc.</li>
        <li>Sesame seeds and tahini</li>
        <li>Pumpkin and hemp seeds (no flax)</li>
        <li>Rice, hemp or oat milk.</li>
        <li>
          All green herbs (except, if there is rosemary, it can only be a
          little). This includes: thyme, oregano, sage, parsley, basil, safron,
          marjoram, dill
        </li>
        <li>Salt</li>
        <li>Olive oil, coconut oil, canola oil.</li>
        <li>Baking soda and powder, cornstarch, etc.</li>
      </ul>
      <br />
      <h3>Food restrictions for Maika</h3>
      <h5>Maika - NO foods:</h5>
      <ul>
        <li>Eggs</li>
        <li>Dairy. Cow's milk and yogurt</li>
      </ul>
      <h5>Maika - YES foods</h5>
      <ul>
        <li>Non-dairy milk. Hemp, oats are best. Rice, almond, coconut are OK.</li>
        <li>Sheep cheese and yogurt. (hard cheeses are best)</li>
      </ul>
      <br />
      <h3>Food restrictions for Nick</h3>
      <h5>Nick - NO foods:</h5>
      <ul>
        <li>Sweet potatoes</li>
        <li>Yam</li>
        <li>Rutabega</li>
        <li>Parsnips</li>
      </ul>
    </Container>
  </Layout>
);

export default Restrictions;

Container.propTypes = {
  center: PropTypes.object,
};
