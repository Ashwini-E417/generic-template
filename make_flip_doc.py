from zipfile import ZipFile, ZIP_DEFLATED

output = "property-card-flip-implementation.docx"

content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>"""

rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>"""

doc_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>"""

styles = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="22"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1"/>
    <w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="40"/></w:rPr>
    <w:pPr><w:spacing w:before="400" w:after="120"/></w:pPr>
  </w:style>
</w:styles>"""

def p(text, bold=False, size=None):
    runs = []
    parts = text.split("\n")
    for i, part in enumerate(parts):
        rpr = ""
        if size:
            rpr += f'<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="{size}"/>'
            if bold:
                rpr += "<w:b/>"
            rpr += "</w:rPr>"
        elif bold:
            rpr = '<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:b/></w:rPr>'
        else:
            rpr = '<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/></w:rPr>'
        runs.append(f"<w:r>{rpr}<w:t xml:space='preserve'>{part}</w:t></w:r>")
        if i < len(parts) - 1:
            runs.append("<w:r><w:br/></w:r>")
    return "<w:p><w:pPr><w:spacing w:after='160'/></w:pPr>" + "".join(runs) + "</w:p>"

def heading(text):
    return f"<w:p><w:pPr><w:pStyle w:val='Heading1'/></w:pPr><w:r><w:rPr><w:rFonts w:ascii='Arial' w:hAnsi='Arial'/><w:sz w:val='40'/></w:rPr><w:t xml:space='preserve'>{text}</w:t></w:r></w:p>"

document = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
 xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
 xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
 xmlns:v="urn:schemas-microsoft-com:vml"
 xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
 xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
 xmlns:w10="urn:schemas-microsoft-com:office:word"
 xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
 xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
 xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
 xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
 xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
 xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
 mc:Ignorable="w14 wp14">
  <w:body>
    {title}
    {subtitle}
    {overview}
    {overview_para}
    {desktop}
    {desktop_items}
    {mobile}
    {mobile_items}
    {notes}
    {notes_items}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>"""

title = p("Property Card Flip Implementation", size=52)
subtitle = p("Explains how the card flip works in desktop and mobile views.")
overview = heading("Overview")
overview_para = p(
    "The property cards are written directly in HTML inside index.html. JavaScript in assests/js/script.js does "
    "not generate card content anymore; it only adds interaction by toggling the is-flipped class on the card "
    "when the user clicks the RERA badge or any element with the flip-toggle class."
)

desktop = heading("Desktop view")
desktop_items = "".join([
    p("The card uses a 3D flip structure with a front face and a back face inside .property-card-inner."),
    p("The front face contains the image, project details, price, and Enquire Now button."),
    p("The back face contains the location and amenities section."),
    p("CSS applies perspective, transform-style: preserve-3d, and rotateY(180deg) to animate the flip."),
    p("Clicking the badge or the close/back controls toggles the is-flipped class, which rotates the inner wrapper."),
])

mobile = heading("Mobile view")
mobile_items = "".join([
    p("The same HTML structure is preserved on mobile, so the behavior stays consistent across screen sizes."),
    p("A mobile CSS adjustment keeps the back face absolutely positioned and removes the earlier override that disabled the flip effect."),
    p("A small JavaScript helper measures the front and back faces and sets a matching height on .property-card-inner so the rotated card has enough room on smaller screens."),
    p("The result is a true flip on mobile instead of a stacked or collapsed layout."),
])

notes = heading("Implementation notes")
notes_items = "".join([
    p("Existing Enquire Now behavior remains unchanged because the click handler stops propagation before the modal logic runs."),
    p("The implementation is now fully HTML-driven for content and JS-driven only for the flip interaction."),
])

document = document.format(
    title=title,
    subtitle=subtitle,
    overview=overview,
    overview_para=overview_para,
    desktop=desktop,
    desktop_items=desktop_items,
    mobile=mobile,
    mobile_items=mobile_items,
    notes=notes,
    notes_items=notes_items,
)

core = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
 xmlns:dc="http://purl.org/dc/elements/1.1/"
 xmlns:dcterms="http://purl.org/dc/terms/"
 xmlns:dcmitype="http://purl.org/dc/dcmitype/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Property Card Flip Implementation</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-07-03T00:00:00Z</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">2026-07-03T00:00:00Z</dcterms:modified>
</cp:coreProperties>"""

app = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
 xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Office Word</Application>
</Properties>"""

with ZipFile(output, "w", ZIP_DEFLATED) as z:
    z.writestr("[Content_Types].xml", content_types)
    z.writestr("_rels/.rels", rels)
    z.writestr("word/_rels/document.xml.rels", doc_rels)
    z.writestr("word/styles.xml", styles)
    z.writestr("word/document.xml", document)
    z.writestr("docProps/core.xml", core)
    z.writestr("docProps/app.xml", app)

