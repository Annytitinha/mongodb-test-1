<?xml version="1.0"?>
<!-- I've forked this file from https://github.com/mikhail-cct/CA1-In-class-Demo and I've changed/adapted it for my CCT college CA1 project.--> 

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
                <table id="productTable" class="indent">
                    <thead>
                        <tr>
                            <!-- Title of the table-->
                            <th colspan="3">Patchouli Products</th> 
                        </tr>
                        <tr>
                            <th>Select</th>
                            <th>Item</th> 
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="/catalog/section">
                            <tr>
                                <td colspan="3">
                                    <xsl:value-of select="@name" />
                                </td>
                            </tr>
                            <xsl:for-each select="product">
                            <tr id="{position()}">                               
                                <td align="center">
                                    <input name="item0" type="checkbox" />
                                </td>
                                <td>
                                    <xsl:value-of select="item" />
                                </td>
                                <td align="right">
                                    <xsl:value-of select="price" />
                                </td>
                            </tr>
                            </xsl:for-each>
                        </xsl:for-each>
                    </tbody>
                </table><br/>
    </xsl:template>
</xsl:stylesheet>
