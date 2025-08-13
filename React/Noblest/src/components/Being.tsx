
const Being = () => {
  return (
    <>
      <div className="hed-one">
        <h2 className="one">WELL-BEING</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex nulla, commodo id pulvinar vitae, tempus a massa.
          Nullam id dolor eget dolor laoreet cursus. Donec eu nulla at lorem porta aliquet. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus facilisis nisl eu congue sollicitudin. Phasellus blandit ultricies facilisis.
          Sed vel odio aliquam, imperdiet nisl sed, accumsan augue. Sed convallis in dolor et luctus. Vivamus et condimentum
          erat, fermentum sagittis nibh. In consequat urna blandit, egestas libero in, viverra est. Donec venenatis egestas
          nibh eget convallis. Phasellus id est turpis. Vivamus vel dui varius, gravida ex.</p>
      </div>
      <div className="feature-section">
        <div className="feature-container">
          <div className="feature-image">
            <img src="/pic 7.png" alt="Feature Image" />
          </div>
          <div className="feature-text">
            <p>
              consectetur justo. In hac habitasse platea dictumst. Mauris sed massa mollis, aliquam elit ut, condimentum
              nisi. Nunc id dapibus dolor, id sodales quam. <a href="">Vestibulum</a> tincidunt est massa, in iaculis nulla
              tincidunt quis. Donec feugiat ligula ut velit sodales, rhoncus iaculis diam sagittis. Maecenas posuere cursus
              dui id tincidunt. Ut non mi nec nisi porta placerat sollicitudin quis est. Ut eget ornare tortor. Aenean ut
              luctus diam. In sed ultrices sapien. Morbi in odio lectus. Integer egestas semper orci et consectetur. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis varius nibh eget mi
              volutpat, vel vestibulum dolor molestie.Sed imperdiet eros eget sem aliquet sollicitudin. Donec mattis tellus
              nec eros imperdiet euismod. Aliquam sed laoreet augue. Morbi ut ex elit. Praesent venenatis cursus tortor, nec
              lobortis quam <i style={{ textDecoration: "underline" }}>tincidunt</i>
              in. Nam quis congue augue. Etiam dapibus
              metus elit, id laoreet tellus pellentesque ut.Donec fringilla ligula vel est sodales, rhoncus ex id tempus
              sagittis.
            </p>
            <a href="#" className="read-more">READ ON
              <span className="underline-bar"></span>
            </a>
          </div>
        </div>

        {/*Decorative Line With Text In Between  */}
        <div className="divider-wrapper">
          <div className="line"></div>
          <div className="divider-text">TRANSFORM. THRIVE. DISCOVER. TRANSFORM.</div>
          <div className="line"></div>
        </div>
      </div>
    </>
  )
}

export default Being;